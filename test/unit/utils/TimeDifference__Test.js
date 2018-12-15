import TimeDifference from 'src/utils/TimeDifference';

describe('Utils TimeDiffence', () => {

    it('should return the time difference between two dates', () => {
        const startDate = new Date('2018-10-23 13:00:00'),
              endDate = new Date('2018-10-25 14:00:00');
        const expectedDifference = {
            days: 2, hours: 1, minutes: 0, seconds: 0
        }
        expect(TimeDifference(startDate, endDate)).toEqual(expectedDifference);
    });

    it('should return zero as time difference when end date already passed', () => {
        const startDate = new Date('2018-10-23 13:00:00'),
              endDate = new Date('2017-10-23 10:00:00');
        const expectedDifference = {
            days: 0, hours: 0, minutes: 0, seconds: 0
        }
        expect(TimeDifference(startDate, endDate)).toEqual(expectedDifference);
    });

})