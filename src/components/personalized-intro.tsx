'use client';

import { useState } from 'react';
import { getPersonalizedIntro } from '@/app/actions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from './ui/skeleton';
import { personalInfo } from '@/lib/data';

const roles = ['Recruiter', 'Hiring Manager', 'Software Engineer', 'Founder', 'Curious Visitor'];

export function PersonalizedIntro() {
  const [introduction, setIntroduction] = useState(personalInfo.bio);
  const [isLoading, setIsLoading] = useState(false);

  const handleRoleChange = async (newRole: string) => {
    if (!newRole) {
      setIntroduction(personalInfo.bio);
      return;
    }
    setIsLoading(true);
    try {
      const result = await getPersonalizedIntro({ jobTitle: newRole });
      setIntroduction(result.introduction);
    } catch (error) {
      setIntroduction(personalInfo.bio); // Fallback on error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <span>Tell me who you are for a personalized intro:</span>
        <Select onValueChange={handleRoleChange} disabled={isLoading}>
          <SelectTrigger className="w-auto min-w-[180px] bg-background">
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            {roles.map((role) => (
              <SelectItem key={role} value={role}>
                {role}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="min-h-[100px]">
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ) : (
          <p className="text-base text-foreground/80 md:text-lg">{introduction}</p>
        )}
      </div>
    </div>
  );
}
