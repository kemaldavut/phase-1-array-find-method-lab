// code your solution here
function superbowlWin(record) {
//Array.prototype.find()
    const result = record.find( record => record.result === "W" );
    return !!result ? result.year : undefined;
  }
