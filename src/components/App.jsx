import { useState } from "react";
import { Container } from './Container/Container';
import { Menu } from './Menu/Menu';
import { FeedbackPage } from "../pages/FeedbackPage/FeedbackPage";
import { PhonebookPage } from "../pages/PhonebookPage/PhonebookPage";
import { ImagesPage } from "../pages/ImagesPage/ImagesPage";

export const App = () => {

  const [currentMenu, setCurrentMenu] = useState("");
  const mainMenu = "Goit-react-hw-04";
  const subMenu = ["Feedback", "Phonebook", "Images"];

  const onCurrentMenu = (e) => {
    setCurrentMenu(e);
  }

  return (
    <>
      <Container>

        <Menu
          mainMenu={mainMenu}
          subMenu={subMenu}
          onCurrentMenu={onCurrentMenu}
        />

        {currentMenu === "Feedback" && <FeedbackPage />}
        {currentMenu === "Phonebook" && <PhonebookPage />}
        {currentMenu === "Images" && <ImagesPage />}

      </Container>
    </>
  );
}