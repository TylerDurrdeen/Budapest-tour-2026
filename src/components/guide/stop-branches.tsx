"use client";

import { StopActions } from "@/components/guide/stop-actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { StopBranch } from "@/lib/tour-data";
import { GitBranch } from "lucide-react";

type StopBranchesProps = {
  branches: StopBranch[];
};

export function StopBranches({ branches }: StopBranchesProps) {
  if (branches.length === 0) return null;

  return (
    <div
      className="space-y-2"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
    >
      <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-medium">
        <GitBranch className="size-3.5" />
        Választható opciók
      </div>
      <div className="grid gap-2">
        {branches.map((branch) => (
          <Card key={branch.id} size="sm" className="bg-muted/20">
            <CardHeader className="gap-1 pb-0">
              <CardTitle className="font-heading text-sm font-bold">
                {branch.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 pt-2">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {branch.description}
              </p>
              {branch.links && branch.links.length > 0 && (
                <StopActions links={branch.links} />
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
