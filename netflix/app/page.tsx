import { Montserrat } from "next/font/google";
import Profile from "./components/Profile";
import { FC } from "react";

// Define the font configuration
const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// Define prop types for the Profile component
interface ProfileProps {
  fullName: string;
  profileLink: string;
}

// Type the Open component
const Open: FC = () => {
  return (
    <div
      className={`h-screen w-screen flex items-center justify-center bg-neutral-900 font-semibold flex-col gap-8 ${montserrat.className}`}
    >
      <h1 className="text-white text-2xl">Who's watching?</h1>
      <div className="flex gap-6">
        <div className="flex gap-8 flex-col md:flex-row">
          <Profile fullName="Mr. Block" profileLink="/profile1.png" />
          <Profile fullName="Mr. Fluff" profileLink="/profile3.png" />
        </div>
        <div className="flex gap-8 flex-col md:flex-row">
          <Profile fullName="Captain Chill" profileLink="/profile2.png" />
          <Profile fullName="Princess Popcorn" profileLink="/profile4.png" />
        </div>
      </div>
    </div>
  );
};

export default Open;
