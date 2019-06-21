
const date = new Date(2019,1);

const year = date.getFullYear();
const month = date.getMonth();
const monthName = getMonth(month);
const monthIndicator = `${monthName} ${year}`;



// Getting the first day of the  Month

const firstDayOfMonth = getDayOfWeek(date.getDay());


// Getting the Number of days in the month
const lastDayOfMonth = new Date(year,month + 1,0);
const numberDaysInMonth = lastDayOfMonth.getDate();


// assigning the first day of the month in the grid calendar
function positonFirstDay(button)
{
   button.style.gridColumn = date.getDay() + 1;
}

function buildDateGridCalendar(gridCalendar)
{
   let buttons ="";
    for(let day=1; day <=numberDaysInMonth; day++)
   {
        buttons += `<button> 
                    <time datetime=${setDateTimeAttribute(day)}>${day}</time> 
                    </button>`;
       
   }
   
   gridCalendar.innerHTML = buttons;
   console.log(gridCalendar);
}


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

function getDayOfWeek(day,style="long")
{
  const arrayDayOfWeek  = [
      {shortName:"Sun",longName:"Sunday"},
      {shortName:"Mon",longName:"Monday"},
      {shortName:"Tue",longName:"Tuesday"},
      {shortName:"Wed",longName:"Wednesday"},
      {shortName:"Thu",longName:"Thursday"},
      {shortName:"Fri",longName:"Friday"},
      {shortName:"Sat",longName:"Saturday"}
  ];
  if(style==="long")
  {
      return arrayDayOfWeek[day].longName;
  }
  else
  {
   return arrayDayOfWeek[day].shortName;
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

function setDateTimeAttribute(day)
{
    const dateTimeIndicator = month + 1 < 10
  ? `0${month + 1}`
  : month + 1;
  
  const dateTimeValue = `${year}-${dateTimeIndicator}-${day}`; 
  return dateTimeValue;
}