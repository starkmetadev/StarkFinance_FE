import { Icon } from "@iconify/react";

const SocialLink = [
  {
    link: "/",
    container: (
      <Icon
        icon="heroicons:users-solid"
        width="18"
        height="18"
        className="text-textPrimary/60"
      />
    ),
  },
  {
    link: "/",
    container: (
      <Icon
        icon="ic:round-discord"
        className="text-textPrimary/60"
        width="18"
        height="18"
      />
    ),
  },
  {
    link: "/",
    container: (
      <Icon
        icon="solar:bookmark-bold"
        className="text-textPrimary/60"
        width="18"
        height="18"
      />
    ),
  },
  {
    link: "/",
    container: (
      <Icon
        icon="file-icons:telegram"
        className="text-textPrimary/60 pr-[2px]"
        width="18"
        height="18"
      />
    ),
  },
  {
    link: "/",
    container: (
      <Icon
        icon="ri:twitter-x-fill"
        className="text-textPrimary/60"
        width="18"
        height="18"
      />
    ),
  },
];

export default SocialLink;
