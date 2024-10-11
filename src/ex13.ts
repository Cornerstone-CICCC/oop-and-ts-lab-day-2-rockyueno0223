// Create a class decorator `InjectTimestamp` that adds a `timestamp` property to a class.
// The decorator should modify the class so that every time an instance is created, it has the current timestamp.

function InjectTimestamp<T extends { new (...args: any[]): {} }>(target: T): T {
  return class extends target{
    timestamp: string;

    constructor(...args: any[]) {
      super(...args)
      this.timestamp = new Date().toLocaleString()
    }
  }
}

@InjectTimestamp
class Report {
  title: string

  constructor(t: string) {
    this.title = t
  }
}

// Expected output (when creating a new instance):
const report = new Report("Quarterly Report")
console.log(report.title) // "Quarterly Report"
console.log(report.timestamp) // current date and time
