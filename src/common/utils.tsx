import { Camera, ChatsCircle, Crown, House, Signpost } from "phosphor-react";

export function getNavIcon(label: string, isActive: boolean) {
  const colourString = isActive ? "#2EC4B6" : "#9CA3AF";
  // Set icons to return
  const homeIcon = <House color={colourString} weight="duotone" size={32} />;
  const photosIcon = <Camera color={colourString} weight="duotone" size={32} />;
  const principlesIcon = (
    <Crown color={colourString} weight="duotone" size={32} />
  );
  const journeyIcon = (
    <Signpost color={colourString} weight="duotone" size={32} />
  );
  const quotesIcon = (
    <ChatsCircle color={colourString} weight="duotone" size={32} />
  );

  let icon = null;

  switch (label) {
    case "Home":
      icon = homeIcon;
      break;

    case "Photos":
      icon = photosIcon;
      break;
    case "Principles":
      icon = principlesIcon;
      break;
    case "Journey":
      icon = journeyIcon;
      break;
    case "Quotes":
      icon = quotesIcon;
      break;

    default:
      break;
  }

  return icon;
}
