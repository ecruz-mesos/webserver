const oracledb = require('oracledb')
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT

try {
    oracledb.initOracleClient({ libDir: 'C:\\Proyectos\\instantclient-basic-windows.x64-19.6.0.0.0dbru\\instantclient_19_6' }); // note the double backslashes
} catch (err) {
    console.error('Whoops!');
    console.error(err);
    process.exit(1);
}

async function run() {

    let connection;

    try {
        connection = await oracledb.getConnection({
            user: "TASS",
            password: "TASS",
            connectString: "192.168.5.32/mesostest"
        });

        const result = await connection.execute(
            `SELECT cane_id, cane_descrip
         FROM cart_negocio
         WHERE cane_id = :id`, [1], // bind value for :id
        );
        console.log(result.rows);

    } catch (err) {
        console.error(err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
}
run();