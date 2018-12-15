const getTimeDifference = (startDate, endDate) => {
    const dayInMs = 1000*60*60*24;
    const diffInMs = endDate.getTime() - startDate.getTime();

    if(diffInMs <= 0){
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const days = Math.round(diffInMs/dayInMs),
          hours = Math.floor((diffInMs % dayInMs) / (1000 * 60 * 60)),
          minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60)),
          seconds =Math.floor((diffInMs % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
}

export default getTimeDifference;