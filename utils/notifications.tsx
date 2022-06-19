import { showNotification } from "@mantine/notifications";

interface ShowErrorNotificationParams {
  message?: string;
}

export function showErrorNotification({
  message,
}: ShowErrorNotificationParams) {
  showNotification({
    title: "Error",
    message: message ?? "Something went wrong",
    color: "red",
  });
}
