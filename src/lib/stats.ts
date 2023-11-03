import { browser } from '$app/environment';
import { questions } from './questions';
import type { QuestionType } from './questions';

const questionsWithStatus = questions.map((q) => ({
	...q,
	checked: browser ? localStorage.getItem(`item${q.id}`) === 'true' : false
}));

export type Section = {
	type: 'question' | 'collapse';
	item?: QuestionType;
	items?: QuestionType[];
};

function getSections(questions: typeof questionsWithStatus) {
	const sections: Section[] = [];
	questions.forEach((q) => {
		if (!q.checked) {
			sections.push({ type: 'question', item: q });
		} else if (sections.length === 0 || sections[sections.length - 1].type === 'question') {
			sections.push({ type: 'collapse', items: [q] });
		} else {
			sections[sections.length - 1].items?.push(q);
		}
	});
	return sections;
}

export const sections = getSections(questionsWithStatus);

const total = questions.length;
const completed = questionsWithStatus.filter((q) => q.checked).length;
const completedPercent = Math.round((completed / questions.length) * 100);

const easy = questionsWithStatus.filter((q) => q.difficulty === 'Easy').length;
const easyCompleted = questionsWithStatus.filter(
	(q) => q.difficulty === 'Easy' && q.checked
).length;
const easyCompletedPercent = Math.round((easyCompleted / easy) * 100);

const medium = questionsWithStatus.filter((q) => q.difficulty === 'Medium').length;
const mediumCompleted = questionsWithStatus.filter(
	(q) => q.difficulty === 'Medium' && q.checked
).length;
const mediumCompletedPercent = Math.round((mediumCompleted / medium) * 100);

const hard = questionsWithStatus.filter((q) => q.difficulty === 'Hard').length;
const hardCompleted = questionsWithStatus.filter(
	(q) => q.difficulty === 'Hard' && q.checked
).length;
const hardCompletedPercent = Math.round((hardCompleted / hard) * 100);

export const stats = {
	total,
	completed,
	completedPercent,
	easy,
	easyCompleted,
	easyCompletedPercent,
	medium,
	mediumCompleted,
	mediumCompletedPercent,
	hard,
	hardCompleted,
	hardCompletedPercent
};
