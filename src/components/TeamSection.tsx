import teamMembers from "@/assets/team-members.png";

const TeamSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          👥 Thành viên nhóm
        </h2>
        <div className="flex justify-center">
          <div className="rounded-2xl bg-card p-4 shadow-lg max-w-4xl w-full">
            <img 
              src={teamMembers} 
              alt="Team Members" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
