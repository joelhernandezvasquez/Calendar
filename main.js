
const date = new Date(2019,1);

const year = date.getFullYear();
const month = date.getMonth();
const monthName = getMonth(month);
const monthIndicator = `${monthName} ${year}`;




function getMonth(month,style="long")
{
    const monthInYear = [
        {shortName:"Jan",longName:"January"},
        {shortName:"Feb",longName:"February"},
        {shortName:"Mar",longName:"March"},
        {shortName:"Apr",longName:"April"},
        {shortName:"May",longName:"May"},
        {shortName:"Jun",longName:"June"},
        {shortName:"Jul",longName:"July"},
        {shortName:"Aug",longName:"August"},
        {shortName:"Sep",longName:"September"},
        {shortName:"Oct",longName:"Octuber"},
        {shortName:"Nov",longName:"November"},
        {shortName:"Dec",longName:"December"}

    ];

    if(style==="long")
    {
        return monthInYear[month].longName;
    }
    else
    {
        return monthInYear[month].shortName;
    }
}

function setIndicatorMonth(monthIndicatorDate)
{
  monthIndicatorDate.textContent = monthIndicator;

  // Setting month indicator datetime attribute

  const dateTimeIndicator = month + 1 < 10
  ? `0${month + 1}`
  : month + 1;
  
  const dateTimeValue = `${year} - ${dateTimeIndicator}`;
  monthIndicatorDate.setAttribute('datetime',dateTimeValue);

}