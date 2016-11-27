import SQLite from 'react-native-sqlite-storage';

export default class SleepData {
  constructor(dbName = "SleepPatternApp.db") {
    this.dbName = dbName;
    this.connection = SQLite.openDatabase(
      dbName, "1.0", "Sleeping App Database", 200000,
      this.openCB, this.errorCB
    );

    // Initialize sleeping data tabletable
    this.initTables();
  }

  /**
   * Create the database if not already existing
   */
  initTables() {
    this.connection.transaction((tx) => {
      tx.executeSql(`
      CREATE TABLE IF NOT EXISTS sleeping_data (
        id         INTEGER  PRIMARY KEY NOT NULL,
        curr_date  DATETIME DEFAULT NULL,
        sleep_time DATETIME DEFAULT NULL,
        wake_time  DATETIME DEFAULT NULL
      )`);
    });
  }

  /**
   * Renders all the sleeping data from the db in the analytics page
   */
  renderData(that) {
    this.connection.transaction((transact) => {
      transact.executeSql(`SELECT * FROM sleeping_data`, [], (_, results) => {
        var totalRecords = results.rows.length;
        records = [];
        for (let i = 0; i < totalRecords; i++) {
          let row = results.rows.item(i);
          records.push(row);
        }
        console.log(`Records returned: ${totalRecords}, ${results}`);
        that.setState({isLoading:false, records:records});
      });
    });
  }

  /**
   * Prints all the records in the table as a string
   */
  getAllRecords(that) {
    // console.log('Joke before:', that.state.joke)
    that.setState({joke: 'Another joke'});
    // console.log('Joke after:', that.state.joke)
    this.connection.transaction((transact) => {
      transact.executeSql(`SELECT * FROM sleeping_data`, [], (_, results) => {
        var totalRecords = results.rows.length;
        console.log('Records found: ', totalRecords);
        for (let i = 0; i < totalRecords; i++) {
          let row = results.rows.item(i);
          let record =
            `${row.id}, ${row.curr_date}, ${row.sleep_time}, ${row.wake_time}`;
          console.log(record);
        }
      });
    });
  }

  /**
   * Stop the sleeping timer and record the time
   */
  startSleeping() {
    this.connection.transaction((transact) => {
      // transact.executeSql(`
      // DELETE FROM sleeping_data
      // `);
      transact.executeSql(`
        INSERT INTO sleeping_data (curr_date, sleep_time) VALUES
        (CURRENT_DATE, DATETIME('NOW', 'LOCALTIME'))
      `);
    });
  }

  /**
   * Start the timer and record the current time
   */
  stopSleeping() {
  }

  errorCB(err) {
    console.log("SQL Error: " + err);
  }

  successCB() {
    console.log("SQL executed fine");
  }

  openCB() {
    console.log("Database OPENED");
  }
}
