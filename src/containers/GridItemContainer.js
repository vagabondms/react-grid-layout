// GridITem들의 작동을 추상화시키는 곳이다.
// 즉 GridItemContainer로 GridItem을 감싸면 원하는 방식으로 작동하는 식.
// GridItem에 모든 로직이 들어있어야한다.
// https://github.com/bokuweb/react-rnd 여기를 참고하면 좋을 듯.
// 각각의 Item들을 GridContainer로 감싸고 있다.
// 이 GridItemContainer에 Props로 주는 식으로 각각의 Item들을 설정하는 방식으로 구현하면 될 것 같다.

// https://www.notion.so/GridLayout-bcb654ff8f44432087e45614fcecf4ce
// 여기를 같이 참고하면서 작성하면 된다.
import React from "react";

const GridItemContainer = () => {
  return <div></div>;
};

export default GridItemContainer;
