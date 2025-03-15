import Image from "next/image";
import Link from "next/link";

interface ProfileProps {
  fullName: string;
  profileLink: string;
}

const Profile: React.FC<ProfileProps> = ({ fullName, profileLink }) => {
  return (
    <Link href="/browse">
      <div className="flex items-center flex-col justify-center gap-2 text-neutral-500 text-md">
        <Image
          src={profileLink}
          width={160}
          height={160}
          alt="Picture of the author"
          className="rounded-md"
        />
        <h1>{fullName}</h1>
      </div>
    </Link>
  );
};

export default Profile;
