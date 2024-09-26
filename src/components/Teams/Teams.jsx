import React from "react";
import Team1Png from "../../assets/Team-1.jpg";
import Team2Png from "../../assets/Team-2.jpg";
import Team3Png from "../../assets/Team-3.jpg";
import Team4Png from "../../assets/Team-4.jpg";
import Team5Png from "../../assets/Team-5.jpg";

const teamData = [
  { id: 1, img: Team1Png, name: "Team 1", title: "Title/Penjelasan" },
  { id: 2, img: Team2Png, name: "Team 2", title: "Title/Penjelasan" },
  { id: 3, img: Team3Png, name: "Team 3", title: "Title/Penjelasan" },
  { id: 4, img: Team4Png, name: "Team 4", title: "Title/Penjelasan" },
  { id: 5, img: Team5Png, name: "Team 5", title: "Title/Penjelasan" },
];

const TeamCard = ({ img, name, title }) => {
  return (
    <div className="relative group">
      {/* Foto */}
      <img
        className="w-full sm:w-[150px] md:w-[150px] lg:w-[200px] xl:w-[350px] rounded-2xl transition-transform duration-300 transform group-hover:scale-105"
        src={img}
        alt={`${name} - ${title}`}
      />
      {/* Informasi */}
      <div className="w-5/6 h-auto bg-white px-4 py-6 md:px-6 md:py-8 shadow-xl rounded-xl absolute -bottom-8 left-1/2 transform -translate-x-1/2 group-hover:translate-y-[-10px] transition-all duration-300">
        <span className="block font-primaryRegular text-xs sm:text-[6px] md:text-[8px] lg:text-[9px] xl:text-xs">
          {title}
        </span>
        <h2 className="font-primaryBold text-sm sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm">
          {name}
        </h2>
      </div>
    </div>
  );
};

const Teams = () => {
  return (
    <section className="bg-notsowhite py-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-3">
          {teamData.map((team) => (
            <TeamCard
              key={team.id}
              img={team.img}
              name={team.name}
              title={team.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
