export interface ChangelogRelease {
    version: string;
    date?: string;
    changes: string[];
}

export function parseChangelog(markdown: string): ChangelogRelease[] {
    const releases: ChangelogRelease[] = [];
    const lines = markdown.split("\n");
    let current: ChangelogRelease | null = null;

    for (const line of lines) {
        const versionMatch = line.match(/^##\s+(v[\d.]+(?:\s*-\s*\d{4}-\d{2}-\d{2})?)/);
        if (versionMatch) {
            if (current) releases.push(current);
            const parts = versionMatch[1].split(/\s*-\s*/);
            current = { version: parts[0].trim(), date: parts[1]?.trim(), changes: [] };
            continue;
        }
        if (current && line.startsWith("- ")) {
            current.changes.push(line.slice(2).trim());
        }
    }
    if (current) releases.push(current);
    return releases;
}
