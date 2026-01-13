import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Star, GitCommit } from 'lucide-react';

const GitHubActivity = () => {
    const username = 'aniket-68';
    const [contributionData, setContributionData] = useState([]);
    const [weeks, setWeeks] = useState([]);
    const [stats, setStats] = useState({
        total: 0,
        streak: 0,
        maxStreak: 0
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const currentYear = new Date().getFullYear();
                setYear(currentYear);

                let fetchedContributions = [];
                // 1. Try fetching current year specifically
                let response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${currentYear}`);

                let success = false;
                if (response.ok) {
                    const data = await response.json();
                    if (data.contributions && data.contributions.length > 0) {
                        fetchedContributions = data.contributions;
                        success = true;
                    }
                }

                // 2. Fallback
                if (!success || fetchedContributions.length === 0) {
                    console.log("Fetching 'last' year as fallback...");
                    response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
                    if (response.ok) {
                        const data = await response.json();
                        // Filter strictly for current year
                        fetchedContributions = (data.contributions || []).filter(d => d.date.startsWith(currentYear.toString()));
                    }
                }

                const contributionMap = {};
                fetchedContributions.forEach(day => {
                    contributionMap[day.date] = { count: day.count, level: day.level };
                });

                // Generate full grid for current Year
                const startDate = new Date(currentYear, 0, 1);
                const endDate = new Date(currentYear, 11, 31);

                const fullYearWeeks = [];
                let currentWeek = [];

                // Align start to Sunday
                const startDayOfWeek = startDate.getDay();
                for (let i = 0; i < startDayOfWeek; i++) {
                    currentWeek.push({ date: null, level: 0, count: 0 });
                }

                const formatDate = (date) => date.toISOString().split('T')[0];
                let loopDate = new Date(startDate);

                while (loopDate <= endDate) {
                    const dateStr = formatDate(loopDate);
                    const apiDay = contributionMap[dateStr];
                    const count = apiDay ? apiDay.count : 0;
                    const level = apiDay ? apiDay.level : 0;

                    currentWeek.push({
                        date: new Date(loopDate),
                        dateStr,
                        count,
                        level,
                        isCurrentYear: true
                    });

                    if (currentWeek.length === 7) {
                        fullYearWeeks.push(currentWeek);
                        currentWeek = [];
                    }

                    loopDate.setDate(loopDate.getDate() + 1);
                }

                if (currentWeek.length > 0) {
                    while (currentWeek.length < 7) {
                        currentWeek.push({ date: null });
                    }
                    fullYearWeeks.push(currentWeek);
                }

                setWeeks(fullYearWeeks);

                // Calculate Stats
                let total = 0;
                let currentStreak = 0;
                let maxStreak = 0;
                let tailStreak = 0;

                const validDays = [];
                let statLoopDate = new Date(startDate);

                while (statLoopDate <= endDate) {
                    const now = new Date();
                    if (statLoopDate > now) break;

                    const dStr = formatDate(statLoopDate);
                    const apiDay = contributionMap[dStr];
                    const count = apiDay ? apiDay.count : 0;
                    validDays.push({ count, date: dStr });
                    statLoopDate.setDate(statLoopDate.getDate() + 1);
                }

                validDays.forEach(day => {
                    total += day.count;
                    if (day.count > 0) {
                        currentStreak++;
                        if (currentStreak > maxStreak) maxStreak = currentStreak;
                    } else {
                        currentStreak = 0;
                    }
                });

                // Tail streak
                for (let i = validDays.length - 1; i >= 0; i--) {
                    if (validDays[i].count > 0) tailStreak++;
                    else break;
                }

                setStats({
                    total,
                    streak: tailStreak,
                    maxStreak
                });

                setLoading(false);

            } catch (err) {
                console.error("Error:", err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    // GitHub Theme Colors
    const getThemeColorClass = (level) => {
        if (level === 0) return 'bg-gray-100 dark:bg-[#161b22]';
        if (level === 1) return 'bg-[#9be9a8] dark:bg-[#0e4429]';
        if (level === 2) return 'bg-[#40c463] dark:bg-[#006d32]';
        if (level === 3) return 'bg-[#30a14e] dark:bg-[#26a641]';
        if (level === 4) return 'bg-[#216e39] dark:bg-[#39d353]';
        return 'bg-gray-100 dark:bg-[#161b22]';
    };

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <section id="github" className="py-20 bg-white dark:bg-black relative transition-colors duration-300">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="flex items-center justify-center mb-4">
                        <Github className="text-gray-900 dark:text-white mr-3 shrink-0" size={32} />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">GitHub Activity {year}</h2>
                    </div>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-base md:text-xl text-gray-600 dark:text-gray-300">
                        {loading ? 'Loading...' : `${stats.total} contributions in ${year}`}
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto min-w-0">
                    <div className="bg-white dark:bg-[#0d1117] rounded-xl border border-gray-200 dark:border-gray-800 p-4 md:p-6 shadow-xl">

                        {/* Stats Header */}
                        {!loading && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-500/50 transition-colors">
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Total Contributions</div>
                                    <div className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                                        <GitCommit className="w-5 h-5 mr-2 text-green-500" />
                                        {stats.total}
                                    </div>
                                    <div className="text-[10px] text-gray-500 mt-1">in {year}</div>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500/50 transition-colors">
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Longest Streak</div>
                                    <div className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                                        <Star className="w-5 h-5 mr-2 text-purple-500" />
                                        {stats.maxStreak} days
                                    </div>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 transition-colors">
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Current Streak</div>
                                    <div className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                                        <Code className="w-5 h-5 mr-2 text-blue-500" />
                                        {stats.streak} days
                                    </div>
                                </div>
                            </div>
                        )}

                        {loading && (
                            <div className="flex justify-center items-center h-64 text-gray-500">
                                Loading contribution data...
                            </div>
                        )}

                        {/* Contribution Graph - Unified Layout */}
                        {!loading && (
                            <div className="w-full overflow-x-auto pb-2">
                                <div className="min-w-[750px] inline-block">
                                    <div className="flex gap-1 items-end">
                                        {/* Column 1: Day Labels */}
                                        <div className="flex flex-col gap-1 w-9 shrink-0">
                                            {/* Spacer for Month Label alignment */}
                                            <div className="h-[13px] mb-2"></div>

                                            {/* Day Labels */}
                                            <div className="flex flex-col gap-1 pr-2 text-right">
                                                <div className="h-[10px] text-[10px] leading-[10px] text-transparent">Sun</div>
                                                <div className="h-[10px] text-[10px] leading-[10px] text-gray-400">Mon</div>
                                                <div className="h-[10px] text-[10px] leading-[10px] text-transparent">Tue</div>
                                                <div className="h-[10px] text-[10px] leading-[10px] text-gray-400">Wed</div>
                                                <div className="h-[10px] text-[10px] leading-[10px] text-transparent">Thu</div>
                                                <div className="h-[10px] text-[10px] leading-[10px] text-gray-400">Fri</div>
                                                <div className="h-[10px] text-[10px] leading-[10px] text-transparent">Sat</div>
                                            </div>
                                        </div>

                                        {/* Columns: Weeks */}
                                        <div className="flex gap-1">
                                            {weeks.map((week, i) => {
                                                const firstDay = week.find(d => d.date);
                                                const date = firstDay ? firstDay.date : null;
                                                const prevWeek = i > 0 ? weeks[i - 1] : null;
                                                const prevDate = prevWeek ? prevWeek.find(d => d.date)?.date : null;

                                                let showLabel = false;
                                                if (date) {
                                                    if (!prevDate) {
                                                        if (date.getMonth() === 0) showLabel = true;
                                                    } else if (date.getMonth() !== prevDate.getMonth()) {
                                                        showLabel = true;
                                                    }
                                                }

                                                return (
                                                    <div key={i} className="flex flex-col gap-1 shrink-0">
                                                        {/* Month Label Header */}
                                                        <div className="h-[13px] mb-2 relative">
                                                            {showLabel && (
                                                                <span className="absolute bottom-0 left-0 text-xs text-gray-400 whitespace-nowrap">
                                                                    {months[date.getMonth()]}
                                                                </span>
                                                            )}
                                                        </div>

                                                        {/* Week Cells */}
                                                        {week.map((day, j) => {
                                                            if (!day.date) {
                                                                return <div key={j} className="w-[10px] h-[10px] rounded-[2px] bg-transparent" />;
                                                            }

                                                            const colorClass = getThemeColorClass(day.level);

                                                            return (
                                                                <div
                                                                    key={j}
                                                                    className={`w-[10px] h-[10px] rounded-[2px] ${colorClass} group relative`}
                                                                >
                                                                    {/* Tooltip */}
                                                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-50">
                                                                        <div className="bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap shadow-lg z-50">
                                                                            <div className="font-semibold">{day.count === 0 ? 'No contributions' : `${day.count} contributions`}</div>
                                                                            <div className="text-gray-400">{day.date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                                                                        </div>
                                                                        {/* Arrow */}
                                                                        <div className="w-2 h-2 bg-gray-900 transform rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1"></div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Footer / Legend */}
                        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4 mt-6 px-2">
                            <a
                                href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500"
                            >
                                Learn how we count contributions
                            </a>

                            <div className="flex items-center gap-2">
                                <span>Less</span>
                                <div className="flex gap-1">
                                    <div className="w-[10px] h-[10px] rounded-[2px] bg-gray-100 dark:bg-[#161b22]"></div>
                                    <div className="w-[10px] h-[10px] rounded-[2px] bg-[#9be9a8] dark:bg-[#0e4429]"></div>
                                    <div className="w-[10px] h-[10px] rounded-[2px] bg-[#40c463] dark:bg-[#006d32]"></div>
                                    <div className="w-[10px] h-[10px] rounded-[2px] bg-[#30a14e] dark:bg-[#26a641]"></div>
                                    <div className="w-[10px] h-[10px] rounded-[2px] bg-[#216e39] dark:bg-[#39d353]"></div>
                                </div>
                                <span>More</span>
                            </div>
                        </div>
                    </div>

                    {/* View Profile Button */}
                    <div className="text-center mt-12">
                        <a
                            href={`https://github.com/${username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            <Github className="mr-2" size={20} />
                            View GitHub Profile
                            <ExternalLink className="ml-2" size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GitHubActivity;
