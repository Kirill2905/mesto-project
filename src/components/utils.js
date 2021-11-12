import {
  profileName,
  profilehobby,
  profileAvatar,
} from "../components/constants";
import { getInitialUser } from "../components/api";

export let userId;

export const loadingProfile = () => {
  getInitialUser().then((res) => {
    userId = res._id;
    profileName.textContent = res.name;
    profilehobby.textContent = res.about;
    profileAvatar.src = res.avatar;
  });
};

export const savingText = (load, button) =>
  load
    ? (button.textContent = "Сохранение...")
    : (button.textContent = "Сохранить");
