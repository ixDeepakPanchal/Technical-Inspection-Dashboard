import VisitesCard from "./VisitesCard";

function VisitesCardList() {
  const visitsData = [
    {
      status: "Assigned",
      noData:"29"
    },
    {
      status: "Active",
      noData:"16"

    },
    {
      status: "Delayed",
      noData:"13"

    },
  ];
  return visitsData?.map((item) => <VisitesCard visitsData={item}></VisitesCard>);
}

export default VisitesCardList;
