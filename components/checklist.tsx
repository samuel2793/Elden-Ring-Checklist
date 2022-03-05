import React from "react";
import { QuestType } from "../data/quests";

interface Props {
  quest: QuestType;
}

const Checklist = (props: Props) => {
  const { quest } = props;

  return (
    <>
      <input id={"chk" + quest.id} type="checkbox" />
      <label htmlFor={"chk" + quest.id}></label>
    </>
  );
};

export default Checklist;
