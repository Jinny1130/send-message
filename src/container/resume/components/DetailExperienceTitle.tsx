import Title from '@/container/resume/components/Title';

interface OwnProps {
  detailTitle?: string;
  detailPeriod?: string;
}

export default function DetailExperienceTitle({
  detailTitle,
  detailPeriod,
}: OwnProps) {
  return (
    <div className="detail_exp_title flex flex-col sm:flex-row sm:items-center justify-between pb-2">
      {detailTitle && <Title title={detailTitle} size="S" />}
      {detailPeriod && (
        <p className="text-xs sm:text-sm text-gray-600">{detailPeriod}</p>
      )}
    </div>
  );
}
