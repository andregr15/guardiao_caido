export default function addExitListener(callback) {
  const exit = (options, exitCode) => {
    if (exitCode || exitCode === 0) console.log(exitCode);
    callback();
  };

  [`exit`, `SIGINT`, `SIGUSR1`, `SIGUSR2`, `uncaughtException`, `SIGTERM`].forEach(eventType => {
    process.on(eventType, exit.bind(null, { eventType }));
  });
}
