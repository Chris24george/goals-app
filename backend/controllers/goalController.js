import asyncHandler from 'express-async-handler';

// @desc Get goals
// @route GET /api/goals
// @access Private
export const getGoals = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'get goals' });
});

// @desc Set goal
// @route POST /api/goals
// @access Private
export const setGoal = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error('Please add a text field');
	}
	console.log(req.body);
	res.status(200).json({ message: 'set goal' });
});

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
export const updateGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `update goal ${req.params.id}` });
});

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
export const deleteGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `delete goal ${req.params.id}` });
});