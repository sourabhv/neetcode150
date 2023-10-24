import puppeteer from 'puppeteer';
import _ from 'lodash';
import fs from 'fs';

const questions = [];

async function getLeetCodeDifficulty(page, url) {
	try {
		console.log(`Opening ${url}`);
		if (!url.includes('leetcode')) {
			return '';
		}
		await page.goto(url);
		await page.waitForSelector(
			'#__next > div:nth-child(3) > div > div > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(1)',
			{ timeout: 10000 }
		);

		const difficulty = await page.evaluate(() => {
			const difficultyElement = document.querySelector(
				'#__next > div:nth-child(3) > div > div > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(1)'
			);
			return difficultyElement ? difficultyElement.innerText.trim() : 'Difficulty not found';
		});
		console.log(difficulty);
		return difficulty;
	} catch (error) {
		console.log(error);
		return '';
	}
}

async function getDifficultiesForAllQuestions() {
	const browser = await puppeteer.launch({ headless: 'new' });
	// open 10 pages
	const pages = await Promise.all(Array.from({ length: 10 }).map(() => browser.newPage()));

	const newQuestions = [];
	const questionBatches = _.chunk(questions, 10);

	for (const [index, questionBatch] of questionBatches.entries()) {
		const promises = questionBatch.map((question, questionIndex) => {
			if (question.difficulty) {
				return Promise.resolve(question.difficulty);
			}
			return getLeetCodeDifficulty(pages[questionIndex], question.link);
		});

		const difficulties = await Promise.all(promises);
		difficulties.forEach((difficulty, difficultyIndex) => {
			newQuestions.push({
				...questionBatch[difficultyIndex],
				difficulty
			});
		});

		console.log(`Finished batch ${index + 1} of ${questionBatches.length}`);
	}

	await browser.close();
	return newQuestions;
}

getDifficultiesForAllQuestions().then((questions) => {
	fs.writeFileSync('./questions.json', JSON.stringify(questions, null, 2));
});
