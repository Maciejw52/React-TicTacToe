

export default function SetPlayerSwitch(player){
  switch (player){
    case 1:
      return 2;
    case 2:
      return 1;
    default:
      return 1;
  }
}