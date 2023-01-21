export const notify = (url: any) => {
  Notification.requestPermission(function (result) {
    if (result === "granted") {
      navigator.serviceWorker.ready.then(function (registration) {
        console.log(registration)
        registration.showNotification("Exercise Time", {
          body: "Look away from the screen",
          icon: "./assets/logo.png",
          data: url,
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "Exercise Reminder",
          requireInteraction: true,
          actions: [
            {
              action: "exercise-action",
              title: "Do exercise",
            },
          ],
        });
      });
    }
  });

  const audio = new Audio(
    "https://soundbible.com/mp3/service-bell_daniel_simion.mp3"
  );
  audio.play();
};
