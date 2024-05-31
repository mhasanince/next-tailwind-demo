import { Skeleton } from '@/components/skeleton';

export default function MoviesSkeleton() {
  return (
    <ul className="grid grid-cols-2 gap-4">
      {Array.from({ length: 20 }).map((_, index) => (
        <li key={index}>
          <div className="flex border rounded-lg h-48 overflow-hidden gap-4 bg-white">
            <Skeleton className="w-36 h-full rounded-none" />
            <div className="py-4 pr-4 flex flex-col gap-3 flex-1">
              <div className="flex items-center justify-between gap-4">
                <Skeleton className="h-7 w-56" />
                <Skeleton className="h-7 w-24" />
              </div>
              <div className="space-y-1">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
              </div>
              <Skeleton className="h-6 w-8" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
