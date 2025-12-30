import { getI18n } from "@/locales/server";

interface KeyAchievementsProps {
  achievements: string[];
}

const KeyAchievements = async ({ achievements }: KeyAchievementsProps) => {
  const t = await getI18n();
  return (
    <div className="mb-6">
      <h3 className="mb-3 text-xl font-bold text-gray-800">
        {t("keyAchievementsTitle")}
      </h3>
      <div className="grid gap-2 md:grid-cols-2">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#018E94]"></div>
            <p className="text-sm leading-relaxed">{achievement}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyAchievements;
