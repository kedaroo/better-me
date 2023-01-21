// TODO add icons to notifications
export function spawnNotification(
  theBody = "notification",
  // theIcon = "../assets/logo.png",
  theTitle = "TITLE",
  theLink = "https://siddhigate.vercel.app"
) {
  var options = {
    body: theBody,
    // icon: theIcon,
  };

  var notification = new Notification(theTitle, options);

  notification.onclick = function (event) {
    event.preventDefault(); // prevent the browser from focusing the Notification's tab
    window.open(theLink, "_blank");
  };

  setTimeout(notification.close.bind(notification), 7000);
}
