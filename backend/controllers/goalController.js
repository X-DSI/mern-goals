// @desc GET goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get Goals'})
}

// @desc Set goals
// @route POST /api/goals
// @access Private
const setGoals = (req, res) => {
    res.status(200).json({ message: 'Set Goals'})
}

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoals = (req, res) => {
    res.status(200).json({ message: `Update Goals ${req.params.id}`})
}

// @desc Delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoals = (req, res) => {
    res.status(200).json({ message: `Delete Goals ${req.params.id}`})
}


module.exports = {
    getGoals, 
    setGoals, 
    updateGoals, 
    deleteGoals
}