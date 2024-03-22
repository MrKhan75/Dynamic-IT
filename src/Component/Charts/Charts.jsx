import { LineChart, Line, XAxis, YAxis } from 'recharts';

const Charts = () => {

    const studentMarksData = [
        { id: 1, name: "John", math: 85, english: 78, bangla: 70 },
        { id: 2, name: "Emily", math: 78, english: 82, bangla: 75 },
        { id: 3, name: "Michael", math: 92, english: 88, bangla: 85 },
        { id: 4, name: "Sophia", math: 65, english: 72, bangla: 68 },
        { id: 5, name: "William", math: 80, english: 75, bangla: 78 },
        { id: 6, name: "Emma", math: 88, english: 90, bangla: 92 },
        { id: 7, name: "James", math: 72, english: 68, bangla: 65 },
        { id: 8, name: "Olivia", math: 95, english: 92, bangla: 88 },
        { id: 9, name: "Alexander", math: 68, english: 70, bangla: 75 },
        { id: 10, name: "Ava", math: 90, english: 85, bangla: 80 }
    ];



    return (


        <div className='my-20'>
            <h2 className='text-center text-2xl font-semibold'>Below Chart Of Our Company</h2>
            <p className='text-center text-base font-normal mt-2 text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error iure mollitia laboriosam neque. <br />Nisi molestiae quod cupiditate quidem rem debitis.</p>
            <div className='flex justify-center my-20'>
                <LineChart width={500} height={300} data={studentMarksData}>
                    <Line type="monotone" dataKey="math" stroke="#8884d8"></Line>
                    <Line type="monotone" dataKey="english" stroke="#999999"></Line>
                    <Line type="monotone" dataKey="bangla" stroke="#999999"></Line>
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </div>
        </div>

    );
};

export default Charts;