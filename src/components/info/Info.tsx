import './style.css';

function Info() {
    return (
        <div className="infoContainer">
            <div id="ip">
                <span>
                    Ip Address
                </span>
                <p>
                    192.212.174.101
                </p>
            </div>
            <div id="localization">
                <span>Localization</span>
                <p>Brooklyn, NY <br /> 10001</p>
            </div>
            <div id="timezone">
                <span>Timezone</span>
                <p>UTC -05:00</p>
            </div>
            <div id="isp">
                <span>ISP</span>
                <p>SpaceX <br /> Starlink</p>
            </div>
        </div>
    );
}

export default Info;