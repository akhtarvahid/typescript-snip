// types.ts
interface InvestmentParams {
    initialAmunt: number;
    AnnualContribution: number;
    expectedReturn: number;
    duration: number;
}

interface YearlyBreakdown {
    year: number;
    startingBalance: number;
    contribution: number;
    interestEarned: number;
    endingBalance: number;
}

interface InvestmentOutput {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
    yearlyBreakdown: YearlyBreakdown[];
    totalContributions: number;
    totalInterestEarned: number;
    finalBalance: number;
}

/**
 * Calculates investment growth over a period of time.
 * Compounding happens annually, and contributions are added at the end of each year.
 */
function calculateMyInvestments({
    initialAmunt,
    AnnualContribution,
    expectedReturn,
    duration
}: InvestmentParams): InvestmentOutput {
    if (initialAmunt < 0) throw new Error("Initial amount cannot be negative.");
    if (AnnualContribution < 0) throw new Error("Annual contribution cannot be negative.");
    if (duration <= 0) throw new Error("Duration must be greater than zero.");

    const yearlyBreakdown: YearlyBreakdown[] = [];
    let balance = initialAmunt;
    let totalContributions = initialAmunt;

    for (let year = 1; year <= duration; year++) {
        const startingBalance = balance;
        const interestEarned = startingBalance * expectedReturn;
        const endingBalance = startingBalance + interestEarned + AnnualContribution;

        yearlyBreakdown.push({
            year,
            startingBalance,
            contribution: AnnualContribution,
            interestEarned,
            endingBalance,
        });

        balance = endingBalance;
        totalContributions += AnnualContribution;
    }

    const totalInterestEarned = balance - totalContributions;

    return {
        initialAmount: initialAmunt,
        annualContribution: AnnualContribution,
        expectedReturn,
        duration,
        yearlyBreakdown,
        totalContributions,
        totalInterestEarned,
        finalBalance: balance,
    };
}

function printInvestmentOutput(output: InvestmentOutput): void {
    const currency = (n: number) =>
        n.toLocaleString("en-US", { style: "currency", currency: "USD" });

    console.log("=".repeat(70));
    console.log("           INVESTMENT GROWTH CALCULATOR");
    console.log("=".repeat(70));
    console.log(`Initial Amount:       ${currency(output.initialAmount)}`);
    console.log(`Annual Contribution:  ${currency(output.annualContribution)}`);
    console.log(`Expected Return:      ${(output.expectedReturn * 100).toFixed(2)}%`);
    console.log(`Duration:             ${output.duration} years`);
    console.log("-".repeat(70));
    console.log(
        "Year".padEnd(6) +
        "Starting".padEnd(15) +
        "Contribution".padEnd(15) +
        "Interest".padEnd(15) +
        "Ending".padEnd(15)
    );
    console.log("-".repeat(70));

    for (const row of output.yearlyBreakdown) {
        console.log(
            String(row.year).padEnd(6) +
            currency(row.startingBalance).padEnd(15) +
            currency(row.contribution).padEnd(15) +
            currency(row.interestEarned).padEnd(15) +
            currency(row.endingBalance).padEnd(15)
        );
    }

    console.log("-".repeat(70));
    console.log(`Total Contributions:  ${currency(output.totalContributions)}`);
    console.log(`Total Interest:       ${currency(output.totalInterestEarned)}`);
    console.log(`Final Balance:        ${currency(output.finalBalance)}`);
    console.log("=".repeat(70));
}

// --- Run the calculator ---
const output = calculateMyInvestments({
    initialAmunt: 5000,
    AnnualContribution: 1000,
    expectedReturn: 0.07,
    duration: 10,
});

printInvestmentOutput(output);