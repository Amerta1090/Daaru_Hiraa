<?php

namespace App\Http\Controllers;

use App\Http\Resources\NotificationResource;
use App\Models\InventroyReport;
use App\Http\Requests\StoreInventroyReportRequest;
use App\Http\Requests\UpdateInventroyReportRequest;
use App\Models\Notification;

class InventryReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $notification = Notification::query();
        $userId = auth()->user()->id;

        
        $notifications = $notification->where('user_id', $userId)->get();
        
        return inertia('Member/Inventaris/Index', [
            "notifications" => NotificationResource::collection($notifications),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInventroyReportRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(InventroyReport $inventroyReport)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(InventroyReport $inventroyReport)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInventroyReportRequest $request, InventroyReport $inventroyReport)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(InventroyReport $inventroyReport)
    {
        //
    }
}
