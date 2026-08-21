function Dots({ count, active, onSelect }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: count }).map((_, i) =>
        onSelect ? (
          <button
            key={i}
            type="button"
            aria-label={`Go to item ${i + 1}`}
            onClick={() => onSelect(i)}
            className={`h-1.5 transition-all ${
              i === active ? 'w-6 bg-rose' : 'w-1.5 rounded-full bg-line'
            }`}
          />
        ) : (
          <span
            key={i}
            className={`h-1.5 ${i === active ? 'w-6 bg-rose' : 'w-1.5 rounded-full bg-line'}`}
          />
        ),
      )}
    </div>
  )
}

export default Dots
