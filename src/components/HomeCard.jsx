import Card from "./card";
const HomeCard = () => {
    return (
        <>
        <section  className="grid md:grid-cols-2  mt-10 gap-5">
                 <Card>
            <h1 className="font-bold text-xl">For developers</h1>
            <h3>Browse our react job and start learning today</h3>
            <button className='bg-black text-white p-2  rounded-2xl mt-4'>Get started</button>
            </Card>

              <Card bg="bg-indigo-100">
            <h1 className="font-bold text-xl">For Employers</h1>
            <h3>Hire solid react developers today and feel good</h3>
            <button className='bg-black text-white p-2  rounded-2xl mt-4'>Get started</button>
            </Card>
        </section>


        </>
    )
}
export default HomeCard;