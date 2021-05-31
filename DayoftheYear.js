// Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

 

// Example 1:

// Input: date = "2019-01-09"
// Output: 9
// Explanation: Given date is the 9th day of the year in 2019.
// Example 2:

// Input: date = "2019-02-10"
// Output: 41
// Example 3:

// Input: date = "2003-03-01"
// Output: 60
// Example 4:

// Input: date = "2004-03-01"
// Output: 61

const dayOfYear = (date) =>  {
    const currentDate = new Date(date)
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const diff  =   currentDate - new Date(year, 0, 0)
    return diff/(1000*60*60*24)
    
    
};
