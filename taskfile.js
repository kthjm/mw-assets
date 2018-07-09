exports.copy = function* (task) {
  yield task.source('assets/**/*.*').target('.dist/taskr')
}

const tasks = Object.keys(exports)

exports.build = function* (task) {
  yield task.parallel(tasks)
}