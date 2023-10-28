import { browser } from '$app/environment';
import { questions } from './questions';
import type { QuestionType } from './questions';
const collapse_zones: [number, number][] = [];

const checked = browser
	? Array.from(
			{ length: questions.length },
			(_, i) => localStorage.getItem(`item${i + 1}`) === 'true'
	  )
	: [];

let start = -1;
for (let i = 0; i < checked.length; i++) {
	if (!checked[i]) {
		start = -1;
	} else if (start === -1) {
		start = i;
	} else if (i === checked.length - 1 || !checked[i + 1]) {
		if (i - start + 1 > 1) {
			collapse_zones.push([start, i]);
		}
	}
}

export type Section = {
	type: 'question' | 'collapse';
	item?: QuestionType;
	items?: QuestionType[];
};

export const sections = collapse_zones
	.map(([start, end], idx) => {
		const prev: Section[] = questions
			.slice(collapse_zones[idx - 1]?.[1] + 1 ?? 0, start)
			.map((q) => ({ type: 'question', item: q }));

		const next: Section[] = (idx === collapse_zones.length - 1 ? questions.slice(end + 1) : []).map(
			(q) => ({
				type: 'question',
				item: q
			})
		);
		const collapsed: Section[] = [{ type: 'collapse', items: questions.slice(start, end + 1) }];

		return prev.concat(collapsed).concat(next);
	})
	.flat();

const questionsWithStatus = questions.map((q, i) => ({ ...q, checked: checked[i] }));

const total = questions.length;
const completed = checked.filter(Boolean).length;
const completedPercent = Math.round((checked.filter(Boolean).length / questions.length) * 100);

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
