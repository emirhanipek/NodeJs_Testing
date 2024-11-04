function fonx(users) {
    const filteredUsers = users.filter(user => user.age > 18);

    const jobGroups = filteredUsers.reduce((acc, user) => {
        if (!acc[user.job]) {
            acc[user.job] = { totalAge: 0, count: 0, names: [] };
        }
        acc[user.job].totalAge += user.age;
        acc[user.job].count += 1;
        acc[user.job].names.push(user.name);
        return acc;
    }, {});

    const results = Object.entries(jobGroups).map(([job, data]) => {
        return {
            job,
            averageAge: data.totalAge / data.count,
            totalUsers: data.count,
            names: data.names.sort((a, b) => a.localeCompare(b)).join(", ")
        };
    });

    return results;
}

module.exports = fonx;
