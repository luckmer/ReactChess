import { TargetType } from "../Constants";

export const updatePosition = (ChessData, dropID, FindTarget) => {
  return ChessData.map((el) => {
    if (
      (Number(el.id) === Number(FindTarget.id) &&
        TargetType(el.Type, 0) === "whitePawn") ||
      TargetType(el.Type, 0) === "BlackPawn"
    ) {
      return {
        ...el,
        FirstMove: false,
      };
    }

    if (Number(el.id) === Number(dropID)) {
      return {
        ...el,
        ChessImg: FindTarget.ChessImg,
        Type: FindTarget.Type,
      };
    }

    if (Number(el.id) === Number(FindTarget.id)) {
      const Type = el.Type.split(" ")[1].toString();
      if (Type === "whitePawn" || Type === "BlackPawn") {
        return {
          ...el,
          FirstMove: false,
          ChessImg: "Empty",
          Type: "",
        };
      }
    }
    if (Number(el.id) === Number(FindTarget.id)) {
      return {
        ...el,
        ChessImg: "Empty",
        Type: "",
      };
    }
    return el;
  });
};
