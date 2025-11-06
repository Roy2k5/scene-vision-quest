const teamMembers = [
  { name: "Lê Chí Đại", university: "ĐH Bách Khoa TPHCM" },
  { name: "Nguyễn Quốc Huy", university: "ĐH Bách Khoa TPHCM" },
  { name: "Phạm Lê Tiến Đạt", university: "ĐH Bách Khoa TPHCM" },
  { name: "Võ Văn Thịnh", university: "ĐH Bách Khoa TPHCM" },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center border"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {member.university}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
