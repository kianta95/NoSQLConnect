const { Thought, User } = require('../models');

const thoughtData = [
    {
        thoughtText: "Hello there",
        username: "Kianta95"
    }
]
async function init () {
    const thought = await Thought.insertMany(thoughtData);
}

init ()