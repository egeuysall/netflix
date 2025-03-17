import Image from "next/image";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";

interface ProfileProps extends HTMLAttributes<HTMLDivElement> {
  /** Full name of the profile owner */
  fullName: string;
  /** URL to the profile image */
  profileLink: string;
  /** Alternative URL to navigate to when clicked - defaults to "/browse" */
  navigateTo?: string;
  /** Image width in pixels - defaults to 160 */
  imageWidth?: number;
  /** Image height in pixels - defaults to 160 */
  imageHeight?: number;
  /** Optional additional CSS class for the profile container */
  containerClassName?: string;
  /** Image loading behavior */
  loading?: "eager" | "lazy";
}

/**
 * Profile component that displays a user's profile image and name
 * with a link to a specified page
 */
const Profile: FC<ProfileProps> = ({
  fullName,
  profileLink,
  navigateTo = "/browse",
  imageWidth = 160,
  imageHeight = 160,
  containerClassName = "",
  loading = "lazy",
  ...restProps
}) => {
  return (
    <Link href={navigateTo}>
      <div 
        className={`flex items-center flex-col justify-center gap-2 text-neutral-500 text-md ${containerClassName}`}
        {...restProps}
      >
        <Image
          src={profileLink}
          width={imageWidth}
          height={imageHeight}
          alt={`Profile picture of ${fullName}`}
          className="rounded-md"
          loading={loading}
          priority={loading === "eager"}
        />
        <h1>{fullName}</h1>
      </div>
    </Link>
  );
};

export default Profile;
