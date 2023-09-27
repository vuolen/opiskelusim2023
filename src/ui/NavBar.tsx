const NavBar = () => {
    return (
        <div className="w-full h-fit flex justify-between p-4 bg-neutral-600 text-white text-lg">
            <h1 className="font-bold">OPISKELUSIMULAATTORI</h1>
            <div className="flex space-x-3">
                <p>SVENSKA</p>
                <p>ENGLISH</p>
            </div>
        </div>
    );
};

export default NavBar;
