import{Course} from "./courses";

export const COURSES: Course[] =[
    {
        id: 1,
        cCode: 'APPDEV1',
        cDesc: 'Introduction to applications Development',
        program: 'BS Computer Science',
        cType: 'Laboratory',
        credit_units: 3,
        preReq: 'HUMCOM1',
        coRec: 'None',
    },
    {
        id: 2,
        cCode: 'HUMCOM1',
        cDesc: 'Human-Computer Interaction',
        program: 'BS Computer Science',
        cType: 'Laboratory',
        credit_units: 3,
        preReq: 'INTRCS1',
        coRec: 'None',
    },
    {
        id: 3,
        cCode: 'ENGSF1',
        cDesc: 'Software Engineering 1',
        program: 'BS Computer Science',
        cType: 'Lecture and Laboratory',
        credit_units: 3,
        preReq: 'INTRCS1',
        coRec: 'None',
    }
]