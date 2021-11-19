import React from "react";

import ButtonType from "./Components/ButtonType";
import IconType from "./Components/IconType";
import FloatingActionButtonType from "./Components/FloatingActionButtonType";
import AvtarType from "./Components/AvtarType";
import BoxType from "./Components/BoxType";
import CardType from "./Components/CardType";
import ListType from "./Components/ListType";
import GridType from "./Components/GridType";
import StackType from "./Components/StackType";
import AlertType from "./Components/AlertType";
import AppBarType from "./Components/AppBarType";
import TextFieldType from "./Components/TextFieldType";
import SnackBarType from "./Components/SnackBarType";
import DialogType from "./Components/DialogType";
import ModalType from "./Components/ModalType";
import PaperType from "./Components/PaperType";
import ChipType from "./Components/ChipType";
import BadgeType from "./Components/BadgeType";

export default function App() {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <AppBarType />
        <h1 style={{ textAlign: "center" }}>Get started with React and MUI</h1>
        <hr />
        <ButtonType />
        <IconType />
        <FloatingActionButtonType />
        <BoxType />
        <AvtarType />
        <CardType />
        <ListType />
        <GridType />
        <StackType />
        <AlertType />
        <TextFieldType />
        <SnackBarType />
        <DialogType />
        <ModalType />
        <PaperType />
        <ChipType />
        <BadgeType />
      </div>
    </>
  );
}
