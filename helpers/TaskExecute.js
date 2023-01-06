class TaskExecuteLast {

    id = 0;
    constructor() {
        if (!TaskExecuteLast.instance) {
            TaskExecuteLast.instance = this;
        }
        return TaskExecuteLast.instance;
    }
}



module.exports = {
    TaskExecuteLast
};
