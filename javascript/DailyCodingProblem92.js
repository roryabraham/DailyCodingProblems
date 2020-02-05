/*
This problem was asked by Airbnb.

We're given a hashmap associating each courseId key with a list of courseIds values,
which represents that the prerequisites of courseId are courseIds.
Return a sorted ordering of courses such that we can finish all courses.

Return null if there is no such ordering.

For example, given {
    'CSC300': ['CSC100', 'CSC200'],
    'CSC200': ['CSC100'],
    'CSC100': []
}, 
should return ['CSC100', 'CSC200', 'CSC300'].
*/

/**
 * Given a mapping of courses to their prerequisites,
 * find an ordering so that we can take all courses
 * @param {object} desiredCoursesAndPrereqs
 * @returns {array} Sorted ordering of courses or null if there is no such ordering
 */
const buildCoursePlan = (desiredCoursesAndPrereqs) => {
    const allDesiredCourses = new Set(Object.keys(desiredCoursesAndPrereqs));
    let coursePlan = [];

    // first pass, determine which courses can be taken immediately
    let courseFound = false;
    for (let [course, prereqs] of Object.entries(desiredCoursesAndPrereqs)) {
        if (!prereqs || prereqs.length === 0) {
            coursePlan.push(course);
            delete desiredCoursesAndPrereqs[course];
            courseFound = true;
        }
    }
    // no classes available w/o prereqs
    if (!courseFound) return null;

    // while not every desired course is in the plan
    while (!Array.from(allDesiredCourses).every(desiredCourse => coursePlan.includes(desiredCourse))) {
        courseFound = false;
        for (let [course, prereqs] of Object.entries(desiredCoursesAndPrereqs)) {
            // if all prereqs met, add to plan
            if (prereqs.every(elem => coursePlan.includes(elem))) {
                coursePlan.push(course);
                delete desiredCoursesAndPrereqs[course];
                courseFound = true;
            }
        }
        // no more classes available
        if (!courseFound) return null;
    }

    return coursePlan;
};

// default example
const testInput1 = {
    'CSC300': ['CSC100', 'CSC200'],
    'CSC200': ['CSC100'],
    'CSC100': []
};
const testOutput1 = ['CSC100', 'CSC200', 'CSC300'];

console.log(buildCoursePlan(testInput1));

// empty object
const testInput2 = { };
const testOutput2 = null;

console.log(buildCoursePlan(testInput2));

// one prerequisite missing: COMP280 not available
const testInput3 = {
    'COMP205': ['COMP150', 'COMP151'],
    'COMP300': ['COMP280', 'COMP151'],
    'COMP305': ['COMP151', 'COMP285'],
    'COMP280': ['COMP151'],
    'COMP151': ['COMP150'],
    'COMP150': []
};
const testOutput3 = null;
console.log(buildCoursePlan(testInput3));

// circular prerequisites
const testInput4 = {
    'PSYC100': ['PSYC101'],
    'PSYC101': ['PSYC100']
}
const testOutput4 = null;
console.log(buildCoursePlan(testInput4));

const testInput5 = {
    'COMP205': ['COMP150', 'COMP151'],
    'COMP300': ['COMP280', 'COMP151'],
    'COMP305': ['COMP151', 'COMP285'],
    'COMP285': ['COMP150'],
    'COMP280': ['COMP151'],
    'COMP151': ['COMP150'],
    'COMP150': []
};
const testOutput5 = ['COMP150', 'COMP285', 'COMP151', 'COMP205', 'COMP305', 'COMP280', 'COMP300'];
console.log(buildCoursePlan(testInput5));